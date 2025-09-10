import { PageHeader } from "@/components/page-header";
import { SmallBubble } from "@/components/ui/small-bubble";

const topics = [
  { href: "#", title: "Start C++", description: "" },
  { href: "#", title: "STL", description: "" },
  { href: "#", title: "DP", description: "" },
  { href: "#", title: "Binary Search", description: "" },
  { href: "#", title: "Graph", description: "" },
  { href: "#", title: "Math", description: "" },
  { href: "#", title: "Advanced DS", description: "" },
  { href: "#", title: "DS", description: "" },
];

export default function ChiragJainBlogPage() {
  return (
    <div>
      <PageHeader
        title="Chirag Jain Sir's Notes"
        description="Select a topic to read the notes."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 justify-items-center">
        {topics.map((topic) => (
          <SmallBubble 
            key={topic.title}
            href={topic.href}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </div>
  );
}
