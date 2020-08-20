import React, {Fragment, useState} from 'react';
import {Button, Layout, Table, Menu, Breadcrumb} from 'antd';
import {
    PlusCircleFilled,
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './App.less';
import AddDrawer from "./components/AddDrawer";

const App = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [values, setValues] = useState([]);
    const [errorInfo, setErrorInfo] = useState({});
    const [collapsed, setCollapsed] = useState(false);

    const handleAddFormOnFinish = (data) => {
        setValues([...values, {
            key: values.length + 1,
            ...data,
        }]);
        setShowDrawer(false);
        console.log(values);
    };
    const handleAddFormOnFinishFailed = (errorInfo) => {
        setErrorInfo(errorInfo);
        console.log(errorInfo);
    };

    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;


    const onCollapse = collapsed => {
            console.log(collapsed);
        setCollapsed({ collapsed });
        };

    const columns = [
        {
            title: 'First name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Phone number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />} />
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: '#fff' }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Fragment>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
                                <div></div>
                                <div>
                                <Button
                                    type="primary"
                                    icon={<PlusCircleFilled/>}
                                    data-testid="add-contact-button"
                                    onClick={() => setShowDrawer(true)}
                                >
                                    Add
                                </Button></div>
                            </div>
                            <Layout.Content>
                                <Table dataSource={values} columns={columns} />;
                            </Layout.Content>
                            <AddDrawer
                                show={showDrawer}
                                handleOnClose={() => setShowDrawer(false)}
                                handleAddFormOnFinish={handleAddFormOnFinish}
                                handleAddFormOnFinishFailed={handleAddFormOnFinishFailed}
                            />
                        </Fragment>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                </Footer>
            </Layout>
        </Layout>
    )
};

export default App;