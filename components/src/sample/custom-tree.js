import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TreeView, TreeItem} from '../components/custom-tree/index';

const useStyles = makeStyles(theme => ({
    container: {
        background: '#f5f5f5',
        //marginRight: 15,
        padding: '10px 20px',
        //margin: 10,
        width: '100%',
        height: '100%',
        overflow: 'auto'
    }
}));

const contents = [
    {title:'Fruits', children:[{title:'Orange'},{title:'Apple'}]}
]
function CustomTree(props){
    const classes = useStyles();
    function renderItem(content, index, fromTrueParent = undefined){
        return (
            <TreeItem
            key={index}
            label={content.title}
            >
                {
                    content.children && 
                    content.children.length>0 &&
                    content.children.map((child,childIndex)=>renderItem(child,childIndex))
                }
            </TreeItem>
        );
    }

    return (
        <div className={classes.container}>
            <TreeView parent>
                {
                    contents &&
                    contents.map((content,index)=>renderItem(content,index,true))
                }
            </TreeView>
        </div>
    );
}

export default React.memo(CustomTree);