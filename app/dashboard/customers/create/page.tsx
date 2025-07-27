import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

import Form from "@/app/ui/customers/create-form";

export default function CreateCustomerPage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create Customer',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
    <Form />
    </main>
  );
}