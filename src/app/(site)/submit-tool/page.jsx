// app/submit-tool/page.jsx
import ToolSubmissionForm from '@components/ToolSubmissionForm';

export const metadata = {
  title: 'Submit Your Tool - TheToolsVerse',
  description: 'Submit your amazing tool to TheToolsVerse and reach thousands of users looking for innovative solutions.',
  keywords: 'submit tool, AI tools, productivity tools, software directory',
  openGraph: {
    title: 'Submit Your Tool - TheToolsVerse',
    description: 'Join thousands of amazing tools on TheToolsVerse. Submit your tool for free review!',
    type: 'website',
  },
};

export default function SubmitToolPage() {
  return (
    <>
      <ToolSubmissionForm />
    </>
  );
}
