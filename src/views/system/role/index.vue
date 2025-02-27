<template>
  <div class="gi_page role-manage">
    <a-card title="角色管理">
      <a-space wrap>
        <a-input v-model="form.name" placeholder="输入角色名搜索" allow-clear style="width: 250px">
          <template #prefix><icon-search /></template>
        </a-input>
        <a-select v-model="form.status" :options="options" placeholder="角色状态" allow-clear
          style="width: 120px"></a-select>
        <a-button type="primary" @click="search">
          <template #icon><icon-search /></template>
          <span>查询</span>
        </a-button>
        <a-button @click="reset">
          <template #icon><icon-refresh /></template>
          <span>重置</span>
        </a-button>
      </a-space>

      <a-row>
        <a-space wrap>
          <a-button type="primary" @click="onAdd">
            <template #icon><icon-plus /></template>
            <span>新增</span>
          </a-button>
          <a-button type="primary" status="danger" @click="onMulDelete">
            <template #icon><icon-delete /></template>
            <span>删除</span>
          </a-button>
        </a-space>
      </a-row>

      <a-table row-key="id" :data="roleList" :bordered="{ cell: true }" :loading="loading"
        :scroll="{ x: '100%', y: '100%', minWidth: 900 }" :pagination="pagination"
        :row-selection="{ type: 'checkbox', showCheckedAll: true }" :selected-keys="selectedKeys" @select="select"
        @select-all="selectAll">
        <template #columns>
          <a-table-column title="序号" :width="64">
            <template #cell="cell">{{ cell.rowIndex + 1 }}</template>
          </a-table-column>
          <a-table-column title="角色名称" data-index="name"></a-table-column>
          <a-table-column title="角色编码" data-index="code"></a-table-column>
          <a-table-column title="状态" :width="100" align="center">
            <template #cell="{ record }">
              <GiCellStatus :status="record.status"></GiCellStatus>
            </template>
          </a-table-column>
          <a-table-column title="描述" data-index="description"></a-table-column>
          <a-table-column title="创建时间" data-index="createTime"></a-table-column>
          <a-table-column title="操作" :width="280" align="center" :fixed="!isMobile() ? 'right' : undefined">
            <template #cell="{ record }">
              <a-space>
                <a-button type="primary" size="mini" :disabled="record.disabled" @click="onEdit(record)">
                  <template #icon><icon-edit /></template>
                  <span>编辑</span>
                </a-button>
                <a-button type="primary" status="success" size="mini" :disabled="record.disabled"
                  @click="onPerm(record)">
                  <template #icon><icon-safe /></template>
                  <template #default>分配权限</template>
                </a-button>
                <a-popconfirm type="warning" content="确定删除该角色吗?" @before-ok="onDelete(record)">
                  <a-button type="primary" status="danger" size="mini" :disabled="record.disabled">
                    <template #icon><icon-delete /></template>
                    <span>删除</span>
                  </a-button>
                </a-popconfirm>
              </a-space>
            </template>
          </a-table-column>
        </template>
      </a-table>

      <AddRoleModal ref="AddRoleModalRef" @save-success="search"></AddRoleModal>
      <PermModal ref="PermModalRef"></PermModal>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import AddRoleModal from './AddRoleModal.vue'
import PermModal from './PermModal.vue'
import { useTable } from '@/hooks'
import { useDict } from '@/hooks/app'
import { type SystemRoleItem, getSystemRoleList } from '@/apis/system'
import { deleteBaseApi } from '@/apis/base'
import { isMobile } from '@/utils'

defineOptions({ name: 'SystemRole' })

const { data: options } = useDict({ code: 'status' })
const AddRoleModalRef = ref<InstanceType<typeof AddRoleModal>>()
const PermModalRef = ref<InstanceType<typeof PermModal>>()

const form = reactive({
  name: '',
  status: ''
})

const {
  loading,
  tableData: roleList,
  pagination,
  selectedKeys,
  search,
  select,
  selectAll,
  handleDelete
} = useTable((page) => getSystemRoleList(page), { immediate: true })

const reset = () => {
  form.name = ''
  form.status = ''
  search()
}

// 删除
const onDelete = (item: SystemRoleItem) => {
  return handleDelete(() => deleteBaseApi({ ids: [item.id] }), { showModal: false })
}

// 批量删除
const onMulDelete = () => {
  if (!selectedKeys.value.length) {
    return Message.warning('请选择角色！')
  }
  handleDelete(() => deleteBaseApi({ ids: selectedKeys.value as string[] }))
}

const onAdd = () => {
  AddRoleModalRef.value?.add()
}

const onEdit = (item: SystemRoleItem) => {
  AddRoleModalRef.value?.edit(item.id)
}

const onPerm = (item: SystemRoleItem) => {
  PermModalRef.value?.open({ code: item.code, title: item.name })
}
</script>

<style lang="scss" scoped></style>
