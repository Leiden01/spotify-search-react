import classes from './Item.module.scss'

const Item = (props: {src: string, title: string, description: string}) => {
    return (
        <div className={classes.itemContainer}>
            <img height="150" width="150" src={props.src}></img>
            <div className={classes.itemInfo}>
                <p className={classes.title}> {props.title} </p>
                <p> {props.description} </p>
            </div>
        </div>
    );
}

export default Item;