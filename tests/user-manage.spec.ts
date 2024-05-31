import { test, expect, Page } from '@playwright/test'
import {
  chooseSelectItemByText,
  filePath,
  findTableItemByText,
  loginSuperAdmin,
  waitTableLoading
} from './utils'

const newUser = {
  avatar: filePath,
  name: 'testUserName',
  email: 'testUser@test.com',
  role: '管理员',
  address: 'test user address',
  status: 1
}

test.beforeEach(async ({ page }) => {
  await loginSuperAdmin(page)
  await page.goto('http://localhost:5173/user')
})

test.describe('User Add', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: '新 建' }).click()
  })

  test('should add user error', async ({ page }) => {
    await page.getByRole('button', { name: '创建新用户' }).click()
    await expect(page.locator('.ant-form .ant-form-item-explain-error')).toContainText([
      '请上传照片',
      '请输入用户名',
      '请输入邮箱',
      '请选择角色'
    ])
  })

  test('should add user success', async ({ page }) => {
    await addNewUser(page)
    expect(findTableItemByText(page, newUser.name)).toBeTruthy()
  })
})

test.describe('User Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: '新 建' }).click()
    await addNewUser(page)
  })

  test('should search user success', async ({ page }) => {
    await page.getByLabel('名称').fill(newUser.name)
    await page.waitForTimeout(500)
    await waitTableLoading(page)
    expect(findTableItemByText(page, newUser.name)).toBeTruthy()
    await expect(page.locator('.hi-table .ant-table-row')).toHaveCount(1)
    await page.getByLabel('状态').click()
    await chooseSelectItemByText(page, '启用')
    await page.waitForTimeout(500)
    await waitTableLoading(page)
    expect(findTableItemByText(page, newUser.name)).toBeTruthy()

    await page.getByLabel('名称').fill('null')
    await page.waitForTimeout(500)
    await waitTableLoading(page)
    await expect(page.locator('.hi-table .ant-table-row')).toHaveCount(0)

    await page.getByRole('button', { name: '取消' }).click()
    await waitTableLoading(page)
    expect(findTableItemByText(page, newUser.name)).toBeTruthy()
  })
})

test.describe('User Del', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: '新 建' }).click()
    await addNewUser(page)
  })

  test('should del user success', async ({ page }) => {
    const user = await findTableItemByText(page, newUser.name)
    await user.getByRole('button', { name: '删除' }).click()
    await page.locator('.ant-popover').getByRole('button', { name: '确 定' }).click()
    await page.locator('.ant-popover').waitFor({ state: 'detached' })
    await expect(page.locator('.hi-table .ant-table-row').first()).not.toContainText(newUser.name)
  })
  test('should batch del user success', async ({ page }) => {
    await page.locator('.hi-table .ant-table-header .ant-table-selection').click()
    const selected = page.locator('.selected-container')
    await expect(selected).toContainText('已选中')
    await selected.locator('.anticon-delete').click()
    await page.locator('.ant-modal-content').getByRole('button', { name: '确 定' }).click()
    await page.locator('.ant-modal-content').waitFor({ state: 'detached' })
    await expect(page.locator('.hi-table .ant-table-row').first()).not.toContainText(newUser.name)
  })
})

test.describe('User Edit', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: '新 建' }).click()
    await addNewUser(page)
  })

  test('should edit user success', async ({ page }) => {
    const user = await findTableItemByText(page, newUser.name)
    await user.getByRole('button', { name: '编辑' }).click()
    await page.locator('.ant-form .render-upload .ant-avatar img').waitFor()
    await page.getByLabel('用户名').fill(newUser.name + 'Edit')
    await page.getByRole('button', { name: '保存编辑' }).click()
    await page.waitForURL('**/user')
    await waitTableLoading(page)
    await expect(page.locator('.hi-table .ant-table-row').first()).toContainText(
      newUser.name + 'Edit'
    )
  })
})

test.describe('User View', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: '新 建' }).click()
    await addNewUser(page)
  })

  test('should view user success', async ({ page }) => {
    const user = await findTableItemByText(page, newUser.name)
    await user.getByRole('button', { name: '查看' }).click()
    await page.waitForURL('**/user/detail/**')
    await page.locator('.user-avatar-container .ant-avatar img').waitFor()
    await expect(page.locator('.avatar-box .user-name')).toContainText(newUser.name)
  })
})

async function addNewUser(page: Page) {
  await page.getByLabel('用户名').fill(newUser.name)
  await page.getByLabel('邮箱').fill(newUser.email)
  await page.getByLabel('角色').click()
  await chooseSelectItemByText(page, newUser.role)
  await page.getByLabel('地址').fill(newUser.address)
  if (newUser.status === 1) {
    await page.locator('.ant-form #form_item_status').click()
  }
  const fileChooserPromise = page.waitForEvent('filechooser')
  await page.locator('.ant-form .render-upload .upload-avatar').click()
  const fileChooser = await fileChooserPromise
  await fileChooser.setFiles(newUser.avatar)
  await page.locator('.ant-form .render-upload .ant-avatar img').waitFor()
  await page.getByRole('button', { name: '创建新用户' }).click()
  await page.waitForURL('**/user')
}
