import React, { useEffect, useState } from 'react';

const ShoppingProducts = (props) => {
    

    // Variavel para capturas dos produtos

    const ProdutQtd = {

        nomeProduto: '',
        quantidadeProduto: '',
        precoProduto: ''

    }

    let [values, setValues]= useState(ProdutQtd)

    useEffect( () => {
        if(props.idAtual == ''){
            setValues({
                ...ProdutQtd
            })
        } else {
            setValues({
                ...props.dadosprodutos[props.idAtual]
            })
        }
    }, [props.idAtual, props.dadosprodutos])


    const alterProduct = e => {
        let { name, value} = e.target
        
        setValues({
            ...values,
            [name]: value
        })
    }

   const EnvioProduct = e => {

        e.preventDefault()
        props.addEedit(values)

    }



    return (

        <form autoComplete="off" onSubmit={EnvioProduct}>
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <i className="fas fa-file-signature p-1"></i>
                </div>
            </div>
            <input className="form-control" placeholder="Nome Produto" name="nomeProduto" value={values.nomeProduto} onChange={alterProduct}/>
            
        </div>

        <div className="row">

        <div className="form-group input-group pt-2">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <i className="fas fa-plus p-1"></i>
                </div>
            </div>
            <input className="form-control" placeholder="Quantidade Produto" name="quantidadeProduto" value={values.quantidadeProduto} onChange={alterProduct}/>
        </div>


        </div>

                <div className="row">

        <div className="form-group input-group pt-2">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <i className="fas fa-dollar-sign p-1"></i>
                </div>
            </div>
            <input className="form-control" placeholder="Preço Produto" name="precoProduto" value={values.precoProduto} onChange={alterProduct}/>
        </div>

        <div className="form-group m-4">
            <input type="submit" value={ props.idAtual == '' ? "Adicionar Produto" : "Atualizar" } className=" btn btn-primary btn-block"/>

        </div>


        </div>

        



        </form>
                    
        
    )



}


export default ShoppingProducts;