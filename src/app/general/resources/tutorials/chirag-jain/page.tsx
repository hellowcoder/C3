import { PageHeader } from "@/components/page-header";
import { SmallBubble } from "@/components/ui/small-bubble";

export default function ChiragJainTutorialsPage() {
  return (
    <div>
      <PageHeader
        title="Chirag Jain Sir's Tutorials"
        description="Select a level to view the playlist."
      />
      <div className="flex justify-center gap-8 mt-10">
        <SmallBubble 
          href="https://youtube.com/playlist?list=PL40a3hTWsqXAw6cnRALe06QzPfeqnOBo6&si=gcF255nYVyKNMqoK"
          title="Level 1"
          description="Beginner"
        />
        <SmallBubble 
          href="https://youtube.com/playlist?list=PL40a3hTWsqXBFAKwLv-02tsKOLCud6hvf&si=KvU6as6mrlcUjM-2"
          title="Level 2"
          description="Intermediate"
        />
        <SmallBubble 
          href="https://youtube.com/playlist?list=PL40a3hTWsqXDg6X9uAHc2nN_Lxcu7VmA6&si=4l0GGoKuW7iqcKyt"
          title="Level 3"
          description="Advanced"
        />
      </div>
    </div>
  );
}
