import questions from "../../resources/questions";
import CircleSvg from "../elements/CircleSvg";
import { useState } from "react";
import { ServerErrors } from "../../resources/types";
import axiosClient from "../../views/axios-client";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../state/notification/notificationSlice";
import { RootState } from "../../state/store";
import { setUser } from "../../state/user/userSlice";

interface QuestionAnswers {
    [key: string]: string;
}

export default function QuestionSection() {

    const user = useSelector((state: RootState) => state.user.user);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<ServerErrors>({});

    const dispatch = useDispatch();

    const initialAnswers: QuestionAnswers = {
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''
    };

    const [answers, setAnswers] = useState(user?.questions ? user?.questions : initialAnswers);

    const handleChange = (questionName: string, answer: string) => {
        setAnswers(prevAnswer => ({
            ...prevAnswer,
            [questionName]: answer
        }))
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            questions: answers
        }

        setIsSubmitting(true);
        setErrors({})

        axiosClient.put("/changeQuestionsUser", payload)
            .then((response) => {

                const updatedUserData = response.data.user; // Zakładając, że dane użytkownika znajdują się pod kluczem 'user' w odpowiedzi

                dispatch(setUser(updatedUserData));
                dispatch(setMessage("Data has been saved"));
            })
            .catch((err) => {
                const response = err.response;

                if (response && response.status === 422) {
                    console.log(response.data.errors)
                    setErrors(response.data.errors);
                } else {
                    console.log(response);
                }
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }


    return (
        <div className="w-[80%]">
            <h2 className="text-2xl font-bold pb-2 text-text_80 mb-10">
                Answer the questions
            </h2>

            <form onSubmit={onSubmit}>
                {questions.map((question, key) => (
                    <div key={key}>
                        <div className="flex justify-between  items-end mt-8">
                            <p className="text-xl text-text_80">{question.text}</p>
                            <div className="flex space-x-6">
                                <label className="flex flex-col text-xl space-y-2 cursor-pointer">
                                    Yes
                                    <input
                                        onChange={() => handleChange(question.name, 'yes')}
                                        className="peer sr-only" type="radio" name={question.name}
                                        checked={answers[question.name] === 'yes'}
                                        value="yes" />
                                    <div className="h-[25px] w-[25px] rounded-full  border-[2px] border-black/20 peer-checked:bg-primary  peer-checked:border-none ">
                                    </div>
                                </label>
                                <label className="flex flex-col text-xl space-y-2 cursor-pointer">
                                    No
                                    <input
                                        onChange={() => handleChange(question.name, 'no')}
                                        className="peer sr-only" type="radio" name={question.name}
                                        checked={answers[question.name] === 'no'}
                                        value="no" />
                                    <div className="h-[25px] w-[25px] rounded-full  border-[2px] border-black/20 peer-checked:bg-primary  peer-checked:border-none ">
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="mt-8 h-[2px] w-full bg-black/10"></div>
                    </div>
                )
                )}

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="px-4 h-[3rem] disabled:bg-[#373737] dark:disabled:bg-[#0c0c0c] rounded-md bg-primary hover:bg-primary_darker mt-10"
                >
                    <div className="flex justify-center items-center">
                        {isSubmitting && (
                            <CircleSvg color="white" secColor="white" />
                        )}
                        <p className="text-white">Save Changes</p>
                    </div>

                </button>
            </form>

        </div>
    );
}
