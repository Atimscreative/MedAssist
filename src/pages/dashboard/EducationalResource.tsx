import { BsArrowLeft } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import Image from '../../assets/drugs.png';

const EducationalResource = () => {
  const { slug } = useParams();

  console.log(slug);

  return (
    <section className="lg:px-8">
      <Link
        to={'/educational-resources'}
        className="inline-flex cursor-pointer items-center gap-2"
      >
        <span className="text-cyan-900">
          <BsArrowLeft size={24} />
        </span>
        <span className="font-medium text-cyan-900">Go Back</span>
      </Link>

      <h1 className="mt-5 text-2xl font-bold">
        Health benefits of paracetamol
      </h1>
      <hr className="my-6 border-t" />
      <article>
        <p className="leading-[180%]">
          Paracetamol, commonly known as acetaminophen, extends beyond its
          well-known role as a pain reliever. This versatile medication offers a
          spectrum of health benefits, making it a valuable and widely used
          option for various conditions. Primarily recognized for its
          effectiveness in alleviating mild to moderate pain, paracetamol also
          serves as a reliable solution for reducing fever, providing comfort
          and aiding in recovery during illnesses associated with elevated
          temperatures.
        </p>
        <figure className="my-4 h-[400px] w-full overflow-hidden">
          <img
            src={Image}
            alt="blog-title"
            className="h-full w-full object-cover"
          />
        </figure>
        <p className="leading-[180%]">
          Its safety profile is notable, making it suitable for a diverse range
          of individuals, including children, pregnant women, and the elderly.
          With minimal gastrointestinal side effects compared to some other pain
          medications, paracetamol is often preferred for those with stomach
          sensitivities. Additionally, its compatibility in combination
          therapies enhances its efficacy, contributing to a more comprehensive
          approach to pain management. <br /> <br /> Paracetamol's significance
          extends to post-surgical recovery, where it plays a crucial role in
          managing pain in conjunction with other medications. Moreover, for
          individuals prone to migraines, paracetamol can be a valuable
          component of a migraine management plan, offering relief when taken
          promptly at the onset of symptoms. In conclusion, the health benefits
          of paracetamol make it a versatile and indispensable medication, but
          as with any medication, responsible use and consultation with
          healthcare professionals are essential for optimal outcomes.
        </p>
      </article>
    </section>
  );
};

export default EducationalResource;
