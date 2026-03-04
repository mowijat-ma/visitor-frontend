'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Here you would typically send the form data to a server
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-lg text-muted-foreground">
            نود سماع آرائك واقتراحاتك. لا تتردد في التواصل معنا عبر النموذج أدناه
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">عنوان البريد الإلكتروني</h3>
              <p className="text-muted-foreground">
                contact@mowijat.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">وسائل التواصل الاجتماعي</h3>
              <p className="text-muted-foreground">
                تابعنا على وسائل التواصل الاجتماعي للبقاء على اتصال
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">ساعات العمل</h3>
              <p className="text-muted-foreground">
                السبت - الخميس: 10 صباحاً - 6 مساءً
                <br />
                الجمعة: مغلق
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" aria-label="نموذج التواصل">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                الاسم
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="أدخل اسمك"
                aria-required="true"
                aria-label="حقل الاسم"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                البريد الإلكتروني
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="أدخل بريدك الإلكتروني"
                aria-required="true"
                aria-label="حقل البريد الإلكتروني"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                الموضوع
              </label>
              <Input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="موضوع الرسالة"
                aria-required="true"
                aria-label="حقل الموضوع"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                الرسالة
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="اكتب رسالتك هنا"
                rows={4}
                aria-required="true"
                aria-label="حقل الرسالة"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={submitted}
              aria-label={submitted ? "تم الإرسال بنجاح" : "إرسال النموذج"}
            >
              {submitted ? 'تم الإرسال بنجاح!' : 'إرسال'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
