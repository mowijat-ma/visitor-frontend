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
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">الاسم</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="أدخل اسمك"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">الموضوع</label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="موضوع الرسالة"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">الرسالة</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="اكتب رسالتك هنا"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={submitted}
            >
              {submitted ? 'تم الإرسال بنجاح!' : 'إرسال'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
