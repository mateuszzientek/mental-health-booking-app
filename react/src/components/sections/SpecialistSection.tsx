import SpecialistCard from "../elements/SpecialistCard";
import specialist1 from "../../assets/images/specialist1.png"
import specialist2 from "../../assets/images/specialist2.png"
import specialist3 from "../../assets/images/specialist3.png"
import specialist4 from "../../assets/images/specialist4.png"

export default function SpecialistSection() {
    return (
        <div className="bg-background pb-40">
            <div className="w-[75rem] mx-auto ">
                <div className=" bg-background_secondary items-center px-2 rounded-md inline-flex h-[2.5rem] mb-3">
                    <p className="text-primary font-medium">Team members</p>
                </div>

                <h2 className="text-4xl font-bold text-text_80 pb-2 mt-2 ">Our Expert Specialist</h2>

                <div className="flex justify-between items-center mt-20">
                    <SpecialistCard name="Oliver Smith" specialization="Family/Marriage Psychology" img={specialist1} width="w-[14rem]" />
                    <SpecialistCard name="Emma Williams" specialization="Trauma Therapy" img={specialist3} width="w-[12.5rem]" />
                    <SpecialistCard name="Ethan Johnson" specialization="Stress and Mental Health" img={specialist2} width="w-[13rem]" />
                    <SpecialistCard name="Sophia Brown" specialization="Public Health Psychology" img={specialist4} width="w-[13.5rem]" />
                </div>

            </div>
        </div>
    );
}