import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

import Form from "@/app/ui/customers/edit-form";
import { fetchCustomerById } from "@/app/lib/data";

export default async function CreateCustomerPage(props: { params: Promise<{ id: string }> }) {

    const id = (await props.params).id;

    const customer = await fetchCustomerById(id);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          { 
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
    <Form customer={customer} />
    </main>
  );
}