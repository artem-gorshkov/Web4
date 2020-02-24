import React from "react";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let isEmpty = true;
        const points = this.props.points;
        if (points.length !== 0) {
            isEmpty = false;
        }
        const table = <table className="fancyTable">
            <tr>
                <th>
                    x
                </th>
                <th>
                    y
                </th>
                <th>
                    r
                </th>
                <th>
                    Результат
                </th>
            </tr>
            {points.map(
                (point) =>
                    <tr>
                        <td>
                            {point.x}
                        </td>
                        <td>
                            {point.y}
                        </td>
                        <td>
                            {point.r}
                        </td>
                        <td>
                            {point.result}
                        </td>
                    </tr>
            )}
        </table>;
        return (<div>{!isEmpty && table}</div>);
    }
}