import { PageHeader } from "@/components/page-header";
import { SmallBubble } from "@/components/ui/small-bubble";

export default function ClubResourcesPage() {
  return (
    <div>
      <PageHeader
        title="Resources"
        description="Learning resources and materials."
      />
      <div className="flex justify-center gap-8 mt-10">
        <SmallBubble 
          href="/general/resources/tutorials"
          title="Tutorials"
          description="Video playlists and guides."
        />
        <SmallBubble 
          href="/general/resources/blog"
          title="Blog"
          description="Articles and notes."
        />
      </div>
    </div>
  );
}
