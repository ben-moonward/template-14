"use client";
import Select from "@/components/inputs/Select";
import React, { useState } from "react";

type Props = { items: { label: string; data: string }[] };

const TestPage = ({ items }: Props) => {
    const [selected, setSelected] = useState<(typeof items)[number] | null>(
        null,
    );

    return (
        <div>
            <div className="text-grey-light">light grey</div>
            <div className="text-grey-dark">dark grey</div>

            <div className="">
                <Select
                    onSelect={item => setSelected(item)}
                    selectedItem={selected}
                    items={items}
                    renderLabel={item => {
                        return item.label;
                    }}
                    placeholder="placeholder"
                />
                <div className="s">stuff</div>
            </div>
        </div>
    );
};

export default TestPage;
