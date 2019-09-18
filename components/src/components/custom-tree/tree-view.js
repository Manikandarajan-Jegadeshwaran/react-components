import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useTreeViewStyles = makeStyles(theme => ({
    container: {
        paddingLeft: props => props.parent ? 0 : 13,
        marginLeft: props => props.parent ? 0 : 12,
        borderLeft: props => !props.parent && '1px dashed #0000004d'
    }
}));

function TreeView(props) {
    const { children } = props;
    const classes = useTreeViewStyles(props);
    return (
        <ul className={classes.container}>
            {
                children
            }
        </ul>
    );
}


export default React.memo(TreeView);