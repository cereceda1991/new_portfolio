import { DataApi } from '../../api/DataApi';
import ContactForm from '../../components/ContactForm/ContactForm';

import './Contact.css';

const Contact = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { cards, contactInfo, form, contentDialog, errorsApi } =
    languageData.contact;

  return (
    <section className="container__contact">
      <ContactForm
        cards={cards}
        contactInfo={contactInfo}
        form={form}
        contentDialog={contentDialog}
        errorsApi={errorsApi}
      />
    </section>
  );
};

export default Contact;
