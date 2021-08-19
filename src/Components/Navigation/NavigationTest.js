import React, {useState} from 'react';
import  s from './NavigationTest.module.css';
import {NavLink} from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'antd/dist/antd.css';

import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, AreaChartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const NavigationTest = () =>{
    const [state, setState] = useState({
        theme: 'ligth',
        current: '1',
    })


   const changeTheme = value => {
        setState({
            theme: 'ligth'
        });
    };

   /*const handleClick = e => {
        console.log('click ', e);
        setState({
            current: e.key,
        });
    };*/

    return ( <div className = {s.navigation}>
        <>

            <Menu
                theme={state.theme}
                /*onClick={handleClick}*/
                style={{ width: 356 }}
                defaultOpenKeys={['sub1', 'sub2', 'sub4',  'sub5']}
                selectedKeys={[state.current]}
                mode="inline"
            >
               
               
               
            </Menu>
        </>
    </div>);
}
export default React.memo(NavigationTest);
