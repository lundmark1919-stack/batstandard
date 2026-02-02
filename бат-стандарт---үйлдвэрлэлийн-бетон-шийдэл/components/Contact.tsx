
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Globe, ShieldCheck } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Constructing the mailto link
    const emailRecipient = 'batstandart@gmail.com';
    const emailSubject = encodeURIComponent(`[Үнийн санал] ${formData.subject} - ${formData.company}`);
    const emailBody = encodeURIComponent(
      `Холбоо барих мэдээлэл:\n` +
      `------------------------\n` +
      `Нэр: ${formData.name}\n` +
      `Компани: ${formData.company}\n` +
      `Утас: ${formData.phoneNumber}\n` +
      `Имэйл: ${formData.email}\n\n` +
      `Хүсэлт / Мессеж:\n` +
      `------------------------\n` +
      `${formData.message}`
    );

    // Simulate small delay for UI feedback
    setTimeout(() => {
      window.location.href = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Clear form after submission
      setFormData({ name: '', company: '', email: '', phoneNumber: '', subject: '', message: '' });
      
      // Auto-hide success message after 10 seconds
      setTimeout(() => setIsSubmitted(false), 10000);
    }, 800);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Утас',
      value: '+976 9905 9856',
      sub: 'Да-Ба, 09:00 - 18:00'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Имэйл хаяг',
      value: 'batstandart@gmail.com',
      sub: 'Шууд имэйл илгээх',
      isLink: true,
      link: 'mailto:batstandart@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Үйлдвэрийн хаяг',
      value: 'Сонгинохайрхан дүүрэг 32-р хороо, Ulaanbaatar, Mongolia, 976',
      sub: 'Бат стандарт үйлдвэрийн цогцолбор'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Холбоо барих</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
              Та дараагийн төслөө эхлүүлэхэд бэлэн үү? Манай инженерийн баг техникийн үзүүлэлт, үнийн санал болон логистикийн төлөвлөлтөд туслахад бэлэн байна.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Оффис хаяг</h2>
                
                <div className="space-y-10">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="flex gap-5">
                      <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 shrink-0 h-max">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{info.label}</p>
                        {info.isLink ? (
                          <a href={info.link} className="text-lg font-bold text-blue-600 hover:text-blue-700 leading-tight transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-bold text-slate-900 leading-tight">{info.value}</p>
                        )}
                        <p className="text-sm text-slate-500 mt-1">{info.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4">Үйл ажиллагааны төлөв</h3>
                  <div className="flex items-center gap-3 text-green-600 font-semibold bg-green-50 px-4 py-3 rounded-xl w-max">
                    <Clock className="w-4 h-4" />
                    Одоогоор нээлттэй байна
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                {isSubmitted ? (
                  <div className="text-center py-20 animate-in fade-in zoom-in">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Send className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Имэйл клиент нээгдлээ!</h2>
                    <p className="text-slate-500 text-lg mb-8">
                      Мэдээллийг таны имэйл клиент рүү дамжууллаа. "Send" товчийг дарж хүсэлтээ batstandart@gmail.com руу илгээнэ үү.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 border-2 border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all"
                    >
                      Дахин хүсэлт илгээх
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Овог нэр</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Нэрээ оруулна уу"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      {/* Company */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Компанийн нэр</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Компанийн нэр"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          value={formData.company}
                          onChange={e => setFormData({...formData, company: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Имэйл хаяг</label>
                        <input 
                          required
                          type="email" 
                          placeholder="example@company.com"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Утасны дугаар</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="+976"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          value={formData.phoneNumber}
                          onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Гарчиг</label>
                      <select 
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                        value={formData.subject}
                        onChange={e => setFormData({...formData, subject: e.target.value})}
                      >
                        <option value="">Сэдэв сонгоно уу...</option>
                        <option value="Үнийн санал авах">Үнийн санал авах</option>
                        <option value="Техникийн үзүүлэлт">Техникийн үзүүлэлт тодруулах</option>
                        <option value="Тээвэрлэлт">Тээвэрлэлт, нийлүүлэлт</option>
                        <option value="Бусад">Бусад</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Мессеж</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Төслийн шаардлага, байршил, тоо хэмжээ болон бусад дэлгэрэнгүй мэдээллийг бичнэ үү..."
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none font-light"
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className={`w-full py-5 rounded-2xl font-bold text-white flex items-center justify-center gap-3 transition-all shadow-xl text-lg ${
                        isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/30 active:scale-[0.98]'
                      }`}
                    >
                      {isSubmitting ? 'Бэлтгэж байна...' : (
                        <>
                          Мэйл илгээх <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] text-center uppercase tracking-widest font-bold">
                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                      Таны хүсэлт batstandart@gmail.com хаяг руу шууд очно
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
