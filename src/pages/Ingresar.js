import {Navigate, useNavigate} from 'react-router-dom';

import { SaveOutlined } from '@ant-design/icons';
import { 
    Button, 
    Form, 
    Input, 
    InputNumber, 
    Typography, 
    Divider
  } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { useState } from 'react';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const {Title, Text } = Typography;

const layout = {
  labelCol  : { span: 8 },
  wrapperCol: { span: 14}
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 14}
}

export const Ingresar = () => {

  const navigate = useNavigate();
  useHideMenu( false );

  const [ usuario ] = useState( getUsuarioStorage() );

  const onFinish = ({ agente, escritorio }) => {

    localStorage.setItem('agente', agente);
    localStorage.setItem('escritorio', escritorio);

    navigate("/escritorio", { replace: true });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if( usuario.agente && usuario.escritorio ){
    return <Navigate to="/escritorio" />
  }
  
  return (

    <>
        <Title level={2}>Ingresar</Title>
        <Text>Ingresar nombre y numero de escritorio</Text>
        <Divider />

        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Nombre del Ejecutivo"
            name="agente"
            rules={[
              {
                required: true,
                message: 'Porfavor ingrese su nombre!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Escritorio"
            name="escritorio"
            rules={[
              {
                required: true,
                message: 'Ingrese el numero de escritorio!',
              },
            ]}
          >
            <InputNumber min={1} max={99} />
          </Form.Item>

          <Form.Item
            {...tailLayout}
          >
            <Button 
              type="primary" 
              htmlType="submit"
              shape="round"
            >
              <SaveOutlined />
              Ingresar
            </Button>
          </Form.Item>
        </Form>
    </>

  )
}
