import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { TreeView, TreeItem} from '../components/custom-tree/index';

const useStyles = makeStyles(theme => ({
    container: {
        background: '#f5f5f561',
        //marginRight: 15,
        padding: '10px 20px',
        //margin: 10,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        position:'relative'
    },
    showWindow:{
        position:'absolute',
        top:0,
        right:0,
        minWidth:'33%',
        minHeight:'33%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background:'#ffffffbd',
        backdropFilter: 'saturate(180%) blur(20px)',
        boxShadow:'0px 0px 3px 1px #ccc'
    }
}));

const contents = [
    {
        title:'Fruits', 
        children:[
            {title:'Orange'},
            {title:'Apple'}
        ]
    },
    {
        title:'Animal', 
        children:[
            {
                title:'Land Animal',
                children:[
                    {title:'Lion'},
                    {title:'Tiger'},
                    {title:'Ape'}
                ]
            },
            {
                title:'Water Animal',
                children:[
                    {
                        title:<div>
                            <table style={{border:'1px solid #ccc'}}>
                                <thead>
                                    <tr>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Life span
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Whale
                                    </td>
                                    <td>
                                        40 yrs
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Shark
                                    </td>
                                    <td>
                                        30 yrs
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Squid
                                    </td>
                                    <td>
                                        10 yrs
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                ]
            }
        ]
    },
    {
        title:'Human'
    },
    {
        title:'Robots',
        children:[
            {
                title:<img 
                src={`${process.env.PUBLIC_URL}/assets/images/robot.png`}
                width="300"
                height="200"
                alt="robot"
                />
            }
        ]
    }
]

function CustomTree(props){
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState('Preview');
    function handleClick(content){
        setSelectedItem(content.title)
    }

    function renderItem(content, index, fromTrueParent = undefined){
        return (
            <TreeItem
            key={index}
            label={content.title}
            onClick={() => handleClick(content)}
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
            <div className={classes.showWindow}>
                {
                    selectedItem
                }
            </div>
        </div>
    );
}

export default React.memo(CustomTree);