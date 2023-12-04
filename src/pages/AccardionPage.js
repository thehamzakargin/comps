import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id:'wert',
            label:'can i use React on a project',
            content:'you can use react on any projectyou can use react on any projectyou can use react on any projectyou can use react on any projectyou can use react on any projectyou can use react on any projectyou can use react on any project'
        },
        {
            id:'asdf',
            label:'can i use javascript on a project',
            content:'you can use javascript on any projectyou can use javascript on any projectyou can use javascript on any projectyou can use javascript on any projectyou can use javascript on any projectyou can use javascript on any project'
        },
        {
            id:'zxcv',
            label:'can i use c# on a project',
            content:'you can use c# on any projectyou can use c# on any projectyou can use c# on any projectyou can use c# on any projectyou can use c# on any projectyou can use c# on any projectyou can use c# on any projectyou can use c# on any project'
        }
    ]
    return <Accordion items={items} />;
}

export default AccordionPage;