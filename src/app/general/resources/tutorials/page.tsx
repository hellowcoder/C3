import { PageHeader } from "@/components/page-header";
import { SmallBubble } from "@/components/ui/small-bubble";

export default function TutorialsPage() {
  return (
    <div>
      <PageHeader
        title="Tutorials"
        description="Select an instructor to view their tutorials."
      />
      <div className="flex justify-center gap-8 mt-10">
        <SmallBubble 
          href="/general/resources/tutorials/chirag-jain"
          title="Chirag Jain Sir"
          description="Competitive Programming"
        />
        {/* You can add more instructor bubbles here in the future */}
        {/* 
        <SmallBubble 
          href="/general/resources/tutorials/other-instructor"
          title="Other Instructor"
          description="Subject"
        />
        */}
      </div>
    </div>
  );
}