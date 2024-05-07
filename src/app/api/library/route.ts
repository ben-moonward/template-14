import { NextResponse } from "next/server";

/**
 * Sample API route that returns a subset of components.
 */
export async function GET(request: Request) {
    // const wait = Math.random() * (2 - 0.5) + 0.5;
    // await new Promise(resolve => setTimeout(resolve, wait * 1000));
    await new Promise(resolve => setTimeout(resolve, 1000));

    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page"));
    console.log(`s`, searchParams);
    const pageSize = 5 as const;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const subset = components.slice(start, end);

    return NextResponse.json(
        subset.map(({ name, description }) => ({
            name,
            description,
        })),
    );
}

class Component {
    constructor(
        public name: string,
        public description: string,
    ) {}
}

const components = [
    new Component("Button", "A button component"),
    new Component("Input", "An input component"),
    new Component("Checkbox", "A checkbox component"),
    new Component("Dropdown", "A dropdown component"),
    new Component("Modal", "A modal component"),
    new Component("Table", "A table component"),
    new Component("Card", "A card component"),
    new Component("Slider", "A slider component"),
    new Component("Tabs", "A tabs component"),
    new Component("Tooltip", "A tooltip component"),
    new Component("Progress", "A progress component"),
    new Component("Avatar", "An avatar component"),
    new Component("Menu", "A menu component"),
    new Component("Form", "A form component"),
    new Component("Alert", "An alert component"),
    new Component("Badge", "A badge component"),
    new Component("Pagination", "A pagination component"),
    new Component("Stepper", "A stepper component"),
    new Component("Accordion", "An accordion component"),
    new Component("Spinner", "A spinner component"),
    new Component("Calendar", "A calendar component"),
    new Component("Timeline", "A timeline component"),
    new Component("Popover", "A popover component"),
    new Component("Breadcrumb", "A breadcrumb component"),
    new Component("Tag", "A tag component"),
    new Component("Dialog", "A dialog component"),
    new Component("List", "A list component"),
    new Component("Navbar", "A navbar component"),
    new Component("Footer", "A footer component"),
];
