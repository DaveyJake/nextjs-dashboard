import { notFound } from 'next/navigation';
import React from 'react';
import { fetchCustomers, fetchInvoiceById } from '../../../../lib/data';
import Breadcrumbs from '../../../../ui/invoices/breadcrumbs';
import Form from '../../../../ui/invoices/edit-form';

type InvoiceEditParams = { params: { id: string } };

export default async function Page({ params }: InvoiceEditParams ) {
  const id = params.id;
  const [ invoice, customers ] = await Promise.all([
    fetchInvoiceById( id ),
    fetchCustomers()
  ]);

  if ( ! invoice ) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}