<template>
  <div>
    <div class="cui__utils__heading">
      <strong>Trending Categories</strong>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <cui-chart-11 />
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <cui-chart-11v1 />
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <cui-chart-11v2 />
        </div>
      </div>
    </div>
    <div class="cui__utils__heading">
      <strong>TRENDING STREAMERS</strong>
    </div>
  </div>
</template>

<script>

import CuiChart11 from '@/components/kit/widgets/Charts/11'
import CuiChart11v1 from '@/components/kit/widgets/Charts/11v1'
import CuiChart11v2 from '@/components/kit/widgets/Charts/11v2'

import data from './data.json'

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Office',
    dataIndex: 'office',
    key: 'office',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
    sorter: (a, b) => a.salary - b.salary,
  },
]

export default {
  components: {
    CuiChart11,
    CuiChart11v1,
    CuiChart11v2,

  },
  data() {
    return {
      tableData: data.tableData,
      tableColumns,
    }
  },

}
</script>
