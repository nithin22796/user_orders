import React from 'react'
import Styles from "./styles.module.css";
import Button from '@mui/material/Button';
import Table from "../../core/table/table";
import Form from "./form";
import { Column } from '../../components/users/meta';

interface IModel {
  heading: string;
  btnLabel: string;
  btnClick: () => void;
  columns: Column[];
  data: any;
  showForm: boolean;
  formAction: any;
}

function Model(props: IModel) {
  return (
    <>
      <div className={`${Styles.user_header}`}>
        <h1 className={`${Styles.user_headline}`}>{props.heading}</h1>
        <Button className={`${Styles.user_button}`} variant="outlined" onClick={props.btnClick}>{props.btnLabel}</Button>
      </div>
      {/* <DataTable data={users} /> */}
      <Table columns={props.columns} data={props.data} />
      {props.showForm ? (
          <Form isOpen={props.showForm} action={props.formAction} cancel={props.btnClick} title={props.btnLabel} />
      ) : null}
    </>
  )
}

export default Model