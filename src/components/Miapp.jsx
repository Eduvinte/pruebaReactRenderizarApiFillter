import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ImgIndicador from '../images/descarga.jpg'
import '../styles/miapp.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Miapp() {

    const [data, setData] = useState ([])
    const [nombre, setNombre] = useState ('')

    useEffect(() => {
        let url = 'https://mindicador.cl/api'
            fetch(url)
            .then((r) => r.json())
            .then((json) => {
            const value = Object.values(json).splice(3)
            setData(value)
            console.log(data)
    })

    }, [])

    const capturarNombre = (e) => {
        setNombre(e.target.value)
    }

    return (
        <>
        <div className="contenedor">

            <InputGroup className="mb-3 p-5" onChange={capturarNombre}>
                <strong style={{marginRight: '10px', padding: '1%', color: 'black'}}>Busque por nombre</strong>
                <Form.Control
                placeholder="Nombre de la moneda"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
            </InputGroup>


        {data.filter((value) => {
            return nombre === '' ? value : value.nombre.includes(nombre)
        }).map((item) => {
            return (
                <>
      
                <div>
                <div style={{ width: '18rem', margin: '15px' }}>
                <Card.Img variant="top" src={ImgIndicador} />
                    <Card.Body className='m-5'>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>
                        {item.valor}
                    </Card.Text>
                <small>{item.fecha}</small>
                </Card.Body>
                </div>
                </div>
            </>
            )
        })}         
            </div>
        </>
    )
 
       
   
}

export default Miapp