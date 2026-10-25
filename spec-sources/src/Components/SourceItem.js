import Button from './Button';
function SourceItem({itemNumber, itemSource, itemEmail}) {
    return (
        <div className="source-item">
            <h2 className="item-number">{itemNumber}</h2>
            <h2 className="item-source">{itemSource}</h2>
            <h2 className="item-email">{itemEmail}</h2>
            <Button
                label = "DELETE"
                type = "del-button"/>
        </div>
    );
}

export default SourceItem