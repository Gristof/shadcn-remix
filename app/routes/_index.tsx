import type { V2_MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog";

export const meta: V2_MetaFunction = () => {
	return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
	return (
		<div className="container mx-auto rounded m-8 p-6 bg-zinc-300 space-y-6 border-2 border-zinc-700">
			<h1 className="text-5xl tracking-tight font-light">Welcome to Remix</h1>
			<ul className="space-y-4">
				<li>
					<a
						target="_blank"
						className="underline flex align-middle"
						href="https://remix.run/tutorials/blog"
						rel="noreferrer"
					>
						<ArrowLongRightIcon className="w-6 mr-2" />
						15m Quickstart Blog Tutorial
					</a>
				</li>
				<li>
					<a
						target="_blank"
						className="underline flex align-middle"
						href="https://remix.run/tutorials/jokes"
						rel="noreferrer"
					>
						<ArrowLongRightIcon className="w-6 mr-2" />
						Deep Dive Jokes App Tutorial
					</a>
				</li>
				<li>
					<a target="_blank" className="underline flex align-middle" href="https://remix.run/docs" rel="noreferrer">
						<ArrowLongRightIcon className="w-6 mr-2" />
						Remix Docs
					</a>
				</li>
				<li>
					<Button>shadcn/ui button</Button>
				</li>
			</ul>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline">Open dialog</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<p>Dialog content</p>
					</div>
					<DialogFooter>
						<p>Dialog footer</p>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
