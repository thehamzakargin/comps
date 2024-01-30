import { Fragment } from 'react';

function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((column) => {
        if(column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return <th key={column.label} >{column.label}</th>
    })
    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((colomn) => {
            return <td className="p-2" key={colomn.label}>{colomn.render(rowData)}</td>;
        });

        return (
            <tr  className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b2">{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    )
}

export default Table;