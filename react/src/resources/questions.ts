interface QuestionProps {
    name: string,
    text: string
}


const questions: QuestionProps[] = [
    {
        name: "question1",
        text: "Have you ever been to therapy?"
    },
    {
        name: "question2",
        text: "Do you have any previous experience with counseling or therapy?"
    },
    {
        name: "question3",
        text: "Do you currently have any mental health diagnoses?"
    },
    {
        name: "question4",
        text: "Are you currently taking any medication for mental health purposes?"
    },
    {
        name: "question5",
        text: "Do you feel overwhelmed by stress or anxiety?"
    }
];

export default questions;
