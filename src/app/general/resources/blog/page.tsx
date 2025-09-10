import { PageHeader } from "@/components/page-header";
import { SmallBubble } from "@/components/ui/small-bubble";

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        title="Blog"
        description="Select an author to view their articles."
      />
      <div className="flex justify-center gap-8 mt-10">
        <SmallBubble 
          href="/general/resources/blog/chirag-jain"
          title="Chirag Jain Sir"
          description="Notes and Articles"
        />
        {/* You can add more author bubbles here in the future */}
      </div>
    </div>
  );
}