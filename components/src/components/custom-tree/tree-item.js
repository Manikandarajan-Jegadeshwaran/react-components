import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Label from '@material-ui/icons/Label';
import SvgIcon from '@material-ui/core/SvgIcon';
import TreeView from './tree-view';
import ButtonBase from '@material-ui/core/ButtonBase';


const defaultExpanded = false;

const useTreeItemStyles = makeStyles(theme => ({
    treeItem: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        width: 'inherit'
    },
    listContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        //minHeight: '3rem',
        color: '#0000004d',
        '&:hover': {
            //background: '#eae5e5',
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15
        },
        '-webkit-user-select': 'none',
        '-moz-user-select': '-moz-none',
        '-ms-user-select': 'none',
        'user-select': 'none'
    },
    defaultItem: {
        background: '#f5f5f5',
    },
    selectedItem: {
        background: '#eae5e5',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    defaultIcon: {
        display: 'flex',
        alignItems: 'center'
    },
    pointer: {
        cursor: 'pointer'
    },
    listIcon: {
        margin: props => props.children ? '0 5px 0 2px' : '0px 5px 0 5px'
    },
    listMarginLeft: {
        marginLeft: 6
    },
    listLable: {
        display: 'flex'
    }
}));

function TreeItem(props) {
    const { children, label, icon, expandIcon, collapseIcon, defaultOpen } = props;
    const classes = useTreeItemStyles(props);

    const [open, setOpen] = useState(defaultExpanded);
    const [selectedItem, setSelectedItem] = useState();

    React.useEffect(() => {
        if (defaultOpen) {
            setOpen(true);
        }
    }, [defaultOpen]);

    function handleClick(e) {
        if (!children)
            return;

        setOpen(!open);
        e.stopPropagation();
    }

    function handleMenuSelection(e, label) {
        e.currentTarget.parentElement.style = {
            background: '#eae5e5',
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15
        }

        if (props.onClick) {
            props.onClick();
        }
    }

    function CloseSquare(props) {
        return (
            <SvgIcon className="close" fontSize="inherit" {...props}>
                {/* tslint:disable-next-line: max-line-length */}
                <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
            </SvgIcon>
        );
    }

    function li() {
        return (
            <ButtonBase className={classes.listContent}>
                <Grid container
                    className={
                        clsx(
                            
                            !children && classes.listMarginLeft,
                            //selectedItem === label ? classes.selectedItem : classes.defaultItem
                        )
                    }
                >

                    <Grid item xs={12} className={classes.defaultIcon} onClick={(e) => handleMenuSelection(e, label)} onDoubleClick={handleClick}>
                        {
                            children
                                ? <Icon //color="#707070"
                                    children={
                                        open
                                            ? expandIcon || <ArrowDropDownIcon />
                                            : collapseIcon || <ArrowRightIcon />
                                    }
                                    onClick={handleClick}
                                />
                                : <CloseSquare />
                        }
                        {
                            <Icon children={icon || <Label />} className={classes.listIcon} />
                        }
                        <Typography color="primary">{label}</Typography>
                    </Grid>
                </Grid>
            </ButtonBase>
        );
    }

    function ul() {
        return (
            <Collapse in={open} timeout="auto" unmountOnExit>
                <TreeView>
                    {
                        children
                    }
                </TreeView>
            </Collapse>
        );
    }

    return (
        <li className={clsx(classes.treeItem, classes.pointer)}>
            {
                li()
            }
            {
                children && ul()
            }
        </li>
    );
}


export default React.memo(TreeItem);