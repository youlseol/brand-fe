import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useCatch, useLoaderData } from "@remix-run/react";
// import { Link } from "@remix-run/react";

export async function loader({ request, params }: LoaderArgs) {
  console.log('loader' , params);
  return json({ magazineId: params.magazineId });
}

export async function action({ request, params }: ActionArgs) {
  console.log('action', params);
  return redirect("/magazine");
}

export default function NoteDetailsPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h3 className="text-2xl font-bold">Magazine {data.magazineId}</h3>
      <p className="py-6">Detail</p>
      <hr className="my-4" />
      <a target="_self" href="/magazine" rel="noreferrer">
      Go mangazine list
          </a>
      {/* <Link to="/magazine" className="text-blue-500 underline">
        Go mangazine list
      </Link> */}
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Note not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
