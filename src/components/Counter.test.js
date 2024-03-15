import { render,fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter,()=>{
    it("counter displays correct inital count",()=>{
        const {getByTestId}=render(<Counter initalCount={0}/>)
        const countvalue=Number(getByTestId("count").textContent);
        expect(countvalue).toEqual(0);
    });

    it("counter displays 1 if click on increment",()=>{
        const {getByTestId,getByRole}=render(<Counter initalCount={0}/>)
        const incrementBtn=getByRole("button",{name:"Increment"})
        const countvalue=Number(getByTestId("count").textContent)
        expect(countvalue).toEqual(0);
        fireEvent.click(incrementBtn)
        const countvalue1=Number(getByTestId("count").textContent);
        expect(countvalue1).toEqual(1);
    });

    it("counter restart to 0",()=>{
        const {getByTestId,getByRole}=render(<Counter initalCount={5}/>)
        const restartBtn=getByRole("button",{name:"Restart"})
        const countValue=Number(getByTestId("count").textContent)
        expect(countValue).toEqual(5);
        fireEvent.click(restartBtn);
        const countValue1=Number(getByTestId("count").textContent)
        expect(countValue1).toEqual(0)
    })

})