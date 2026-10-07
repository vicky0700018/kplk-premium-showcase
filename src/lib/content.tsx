import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import heroImage from "@/assets/consulting-hero.jpg";
import photo0 from "@/assets/photo-0.jpg.asset.json";
import photo1 from "@/assets/photo-1.jpg.asset.json";
import photo2 from "@/assets/photo-2.jpg.asset.json";
import photo3 from "@/assets/photo-3.jpg.asset.json";
import photo4 from "@/assets/photo-4.jpg.asset.json";
import photo5 from "@/assets/photo-5.jpg.asset.json";
import photo6 from "@/assets/photo-6.jpg.asset.json";
import photo7 from "@/assets/photo-7.jpg.asset.json";
import photo8 from "@/assets/photo-8.jpg.asset.json";
import photo9 from "@/assets/photo-9.jpg.asset.json";
import photo10 from "@/assets/photo-10.jpg.asset.json";
import photo11 from "@/assets/photo-11.jpg.asset.json";
import photo12 from "@/assets/photo-12.jpg.asset.json";
import photo13 from "@/assets/photo-13.jpg.asset.json";
import photo14 from "@/assets/photo-14.jpg.asset.json";
import photo15 from "@/assets/photo-15.jpg.asset.json";
import photo16 from "@/assets/photo-16.jpg.asset.json";
import photo17 from "@/assets/photo-17.jpg.asset.json";
import photo18 from "@/assets/photo-18.jpg.asset.json";
import photo19 from "@/assets/photo-19.jpg.asset.json";
import photo20 from "@/assets/photo-20.jpg.asset.json";
import photo21 from "@/assets/photo-21.jpg.asset.json";
import photo22 from "@/assets/photo-22.jpg.asset.json";
import photo23 from "@/assets/photo-23.jpg.asset.json";
import photo24 from "@/assets/photo-24.jpg.asset.json";
import photo25 from "@/assets/photo-25.jpg.asset.json";
import photo26 from "@/assets/photo-26.jpg.asset.json";
import photo27 from "@/assets/photo-27.jpg.asset.json";
export const photos = [photo0.url,photo1.url,photo2.url,photo3.url,photo4.url,photo5.url,photo6.url,photo7.url,photo8.url,photo9.url,photo10.url,photo11.url,photo12.url,photo13.url,photo14.url,photo15.url,photo16.url,photo17.url,photo18.url,photo19.url,photo20.url,photo21.url,photo22.url,photo23.url,photo24.url,photo25.url,photo26.url,photo27.url];
export type RecordItem = { id: string; title: string; description: string; image: string; category?: string; price?: string; role?: string; date?: string; details?: string; items?: string[] };
const serviceDefinitions = [
["Taxation Services", "Income tax filing, tax planning and TDS/TCS compliance.", "Income Tax Filing|Tax Planning|TDS / TCS Returns|Capital Gains Advisory"],
["GST Services", "Clear, consistent GST compliance for your business.", "GST Registration|Monthly & Quarterly Returns|Annual Returns|Reconciliation & LUT"],
["Advisory Services", "A clearer financial direction for every business decision.", "Financial Planning|Business Strategy|Tax Planning|Risk Management"],
["Auditing & Assurance", "Independent insights. Greater confidence in your numbers.", "Statutory Audit|Internal Audit|Tax Audit|Financial Assurance"],
["Accounting Services", "Accurate books that bring your business into focus.", "Bookkeeping|MIS Reporting|Financial Statements|Bank Reconciliation"],
["CS & Corporate Compliance", "Corporate governance, handled with care and precision.", "ROC Filing|MCA Compliance|Director KYC|Corporate Filings"],
["Business Registration", "Build your business on a strong, compliant foundation.", "Company Incorporation|LLP Registration|GST Registration|MSME Registration"],
["Business Valuation & Due Diligence", "Know the value. Understand the opportunity.", "Business Valuation|Financial Due Diligence|Transaction Review|Investment Analysis"],
["Project Financing & Loan Assistance", "Turn your next business milestone into a funded reality.", "CMA Data Preparation|Project Reports|Bank Loan Assistance|Working Capital Assessment|Financial Modeling|Startup Funding Assistance"],
["Virtual CFO Services", "Senior financial thinking, without a full-time commitment.", "Cash Flow Analysis|Budgeting & Forecasting|Profitability Analysis|Board Reporting"],
["Labour Law & Payroll", "Reliable payroll and people-related compliance.", "Payroll Processing|PF & ESIC|Labour Law Compliance|Salary Structuring"],
["Foreign Accounting Services", "Seamless accounting support for a connected world.", "International Bookkeeping|Financial Reporting|Reconciliation|Remote Accounting Support"],
["Notices, Assessment & Appeal", "Calm, informed representation when it matters most.", "Tax Notice Review|Assessment Support|Appeal Preparation|Regulatory Representation"]
];
export const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/," ").trim();
export const defaultServices: RecordItem[] = serviceDefinitions.map(([title,description,items],i)=>({id:slug(title),title,description,image:photos[[3,1,8,26,2,21,7,12,10,23,9,24,0][i]],items:items.split("|")}));
export const defaultIndustries: RecordItem[] = ["Real Estate Developers","Contractors","Startups","Traders","Manufacturing Businesses","Service Businesses","Retail Businesses","Professionals & Consultants","Infrastructure & Construction","Corporate Enterprises"].map((title,i)=>({id:slug(title),title,description:["Complex transactions. Clear financial oversight.","Keep projects, payments and compliance on track.","From your first registration to your next funding round.","Stay on top of inventory, margins and indirect taxes.","Strengthen cost control and operational efficiency.","Focus on your clients. We focus on your numbers.","Simplify daily accounts and grow with confidence.","Personalized tax and accounting for independent experts.","Financial clarity for large-scale projects.","A strategic partner for evolving corporate needs."][i],image:photos[[15,16,20,19,17,11,18,27,6,14][i]]}));
export const defaultBlogs: RecordItem[] = ["GST Registration & Compliance: A Practical Guide","Your Income Tax Filing Checklist","Startup Compliance: Getting the Foundations Right","Better Business Decisions Start with Financial Planning","CMA Data: Preparing for Your Next Business Loan","Why Growing SMEs Choose a Virtual CFO"].map((title,i)=>({id:slug(title),title,description:["The essentials of registration, returns and keeping your business compliant.","Prepare for a smoother filing season with a practical document checklist.","The key registrations and filings every new founder should know.","Make cash flow, forecasts and profitability part of your growth strategy.","Understand the financial information lenders expect from your business.","Bring experienced financial leadership to your growing business."][i],image:photos[[22,25,7,2,12,23][i]],category:["GST & Taxation","Income Tax","Startup & Business","Financial Advisory","Financial Advisory","Financial Advisory"][i],date:["October 5, 2026","September 28, 2026","September 20, 2026","September 14, 2026","September 7, 2026","September 1, 2026"][i],details:"Every business has a different financial story. A structured approach helps you understand your obligations, organize your records and make informed decisions. Start by reviewing your current registrations, financial statements and deadlines with a qualified professional. Maintain clear documentation and reconcile transactions regularly. Planning ahead gives your team time to address gaps before they become urgent. This illustrative article is for general information only, not personalized tax or legal advice. Requirements can change; consult a qualified advisor for guidance on your circumstances."}));
export const defaultFaqs: RecordItem[] = [
["How can I schedule a consultation?","Complete our consultation form or call +91 9763984355. This demo simulates a request; no message is sent."],
["What documents are required for tax filing?","Typically PAN, Aadhaar, Form 16, bank statements, income details and investment proofs. The exact list depends on your income sources."],
["Do you work with startups?","Yes. Our services cover registration, bookkeeping, compliance and financial advisory for startups."],
["What GST services do you provide?","GST registration, monthly and quarterly returns, annual returns, reconciliation and LUT support."],
["Do you provide Virtual CFO services?","Yes. Virtual CFO support includes cash flow analysis, budgeting, forecasting, MIS reporting and strategic financial guidance."],
["Can you help with bank loan documentation?","We assist with CMA data, project reports, working capital assessment and financial documentation. Loan approval remains the lender’s decision."],
["How do you handle tax notices?","We review the notice, examine supporting records and help prepare an appropriate response or representation."],
["Do you provide accounting support?","Yes. Bookkeeping, bank reconciliation, financial statements and MIS reporting are available."]
].map(([title,description],i)=>({id:`faq-${i}`,title,description,image:""}));
export type Content = {hero:{title:string;subtitle:string;image:string;cta:string};about:string;contact:{phone:string;email:string;address:string;hours:string};services:RecordItem[];industries:RecordItem[];blogs:RecordItem[];faqs:RecordItem[];team:RecordItem[];testimonials:RecordItem[];pricing:RecordItem[];gallery:RecordItem[];sections:Record<string,boolean>;messages:RecordItem[]};
export const initialContent: Content = {
hero:{title:"Strategic Financial Solutions. Built for Business Growth.",subtitle:"Taxation, accounting, audit and business advisory. A trusted partner to help you move forward with clarity and confidence.",image:heroImage,cta:"Book Free Consultation"},
about:"KPLK is a professionally managed Tax & Management Consultancy firm based in Pune, providing comprehensive taxation, accounting, audit, compliance and business advisory solutions to individuals, startups, SMEs and corporate businesses.",
contact:{phone:"+91 9763984355",email:"support@kplkconsultancy.com",address:"Office No. 13, 1st Floor, Tower - B City Vista Building, Fountain Road, Opp. Victorious School, Kharadi, Pune - 411014",hours:"By appointment. Please call to confirm availability."},
services:defaultServices,industries:defaultIndustries,blogs:defaultBlogs,faqs:defaultFaqs,
team:["Tax Advisory Team","Audit & Assurance Team","Accounting Team","Corporate Compliance Team"].map((title,i)=>({id:`team-${i}`,title,description:"Collaborative expertise. Thoughtful advice. A shared focus on your business.",role:"Illustrative team profile",image:photos[[0,4,9,20][i]]})),
testimonials:["Amit Deshmukh","Priya Sharma","Rohan Mehta","Neha Kulkarni","Vikram Shah","Ananya Rao"].map((title,i)=>({id:`review-${i}`,title,category:["Startup Founder","SME Business Owner","Manufacturing","Professional Services","Retail Business","Technology Startup"][i],image:photos[[27,0,4,20,9,8][i]],description:["KPLK made our business setup completely hassle-free. Every step was explained clearly and our compliance was handled professionally.","We finally have clarity on our finances. Their thoughtful approach has made them an invaluable part of our business journey.","A professional, responsive team that understands our business. Their attention to detail gives us real peace of mind.","Their tax planning support helped us understand our options and make better-informed decisions.","Reliable accounting support and clear advice. We appreciate their proactive approach to compliance.","From registration to financial planning, the support has been practical and easy to understand."][i]})),
pricing:["Startup Compliance","SME Financial Care","Tax & Compliance","Virtual CFO","Business Advisory"].map((title,i)=>({id:`package-${i}`,title,description:["A confident start for your new venture.","Everyday financial clarity for growing businesses.","Stay organized and ready for every deadline.","Strategic financial leadership for your next stage.","A focused plan for your business goals."][i],price:["₹4,999","₹9,999","₹2,499","₹24,999","₹14,999"][i],image:"",items:["Initial consultation","Dedicated point of contact","Monthly review","Customized service scope"]})),
gallery:photos.map((image,i)=>({id:`media-${i}`,title:`Business photography ${i+1}`,description:"",image,category:["About","Services","Finance","Consulting","Team","Office","Industries","Blog"][i%8]})),
sections:Object.fromEntries(["about","why","services","funding","industries","advisory","process","team","testimonials","impact","insights","faq","contact"].map(x=>[x,true])),messages:[]};
const Store = createContext<{content:Content;setContent:(c:Content)=>void}>({content:initialContent,setContent:()=>{}});
export function ContentProvider({children}:{children:ReactNode}){const [content,setState]=useState(initialContent);const [ready,setReady]=useState(false);useEffect(()=>{try{const saved=localStorage.getItem("kplk-content-v1");if(saved)setState({...initialContent,...JSON.parse(saved)});}catch{}setReady(true)},[]);useEffect(()=>{if(ready){try{localStorage.setItem("kplk-content-v1",JSON.stringify(content))}catch{}}},[content,ready]);return <Store.Provider value={{content,setContent:setState}}>{children}</Store.Provider>}
export const useContent=()=>useContext(Store);
export function pageHead(title:string,description:string){return {meta:[{title:`${title} | KPLK Consultancy`},{name:"description",content:description},{property:"og:title",content:`${title} | KPLK Consultancy`},{property:"og:description",content:description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]};}
