//@ts-nocheck
import { bitable, UIBuilder } from "@lark-base-open/web-api";

export default async function main(uiBuilder: UIBuilder) {
    uiBuilder.form((form) => ({
        formItems: [
            form.tableSelect('table', { label: '选择数据表' }),
            form.viewSelect('view', { label: '选择视图', sourceTable: 'table' }),
            form.viewSelect('multipleView', { label: '多选选择视图', sourceTable: 'table', multiple: true }),
            form.tableSelect('table2', { label: '选择数据表2' }),
            // 视图选择组件 view2 会随 table2 数据表选择组件的选项变化而更新
            form.viewSelect('view2', { label: '选择视图2', sourceTable: 'table2' }),
        ],
        buttons: ['确定', '取消'],
    }), async ({ values }) => {
        const { table, view, multipleView, table2, view2 } = values;
    });
}