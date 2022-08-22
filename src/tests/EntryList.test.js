import { fireEvent, render, screen } from "@testing-library/react";
import EntryList from "../EntryList";

describe("EntryList tests", () => {
    test("Renders list of items which been passed via props", () => {
        //Arrange
        const items = ["A", "B", "C"]; //?
        //Act
        render(<EntryList items={items} onChange={() => { }} />);
        //Assert
        const inputs = screen.queryAllByLabelText("entry list input");
        inputs.length;
        expect(inputs.length).toEqual(3);
        expect(inputs[0].value).toEqual("A");
        expect(inputs[1].value).toEqual("B");
        expect(inputs[2].value).toEqual("C");
    });


    // Arrange
    test("input field changes when user types in it", () => {
        render(<EntryList items={[""]} onChange={() => { }} />);
        const firstInput = screen.getAllByLabelText("entry list input")[0];
        //Act
        fireEvent.change(firstInput, {
            target: { value: "foo" },
        });
    // Assert
        expect(firstInput.value).toEqual("foo");
    });

    test("Clear All button clears all input fields", () => {
        //Arrange
        const items = ["A"];
        render(<EntryList items={items} onChange={() => { }} />);
        //Act
        const ClearAllButton = screen.getByText("Clear All");
        fireEvent.click(ClearAllButton);
    // Assert
        const inputs = screen.getAllByLabelText("entry list input");
        expect(inputs.length).toEqual(1);
        expect(inputs[0].value).toEqual("");
    });

    test("Remove All button remove all input fields", () => {
        //Arrange
        const items = ["A"];
        render(<EntryList items={items} onChange={() => { }} />);
        //Act
        const RemoveAllButton = screen.getByText("Remove All");
        fireEvent.click(RemoveAllButton);
    // Assert
        const inputs = screen.queryAllByLabelText("entry list input");
        expect(inputs.length).toEqual(0);
    });

    test("Clear button clears input fields", () => {
        //Arrange
        const items = ["A"];
        render(<EntryList items={items} onChange={() => { }} />);
        //Act
        const ClearButton = screen.getByText("Clear");
        fireEvent.click(ClearButton);
        // Assert
        const inputs = screen.getAllByLabelText("entry list input");
        expect(inputs.length).toEqual(1);
    });
    test("X button 000deletes input fields", () => {
        //Arrange
        const items = ["A"];
        render(<EntryList items={items} onChange={() => { }} />);
        //Act
        const RemoveButton = screen.getByText("X");
        fireEvent.click(RemoveButton);
        // Assert
        const inputs = screen.queryAllByLabelText("entry list input");
        expect(inputs.length).toEqual(0);
    });
});
