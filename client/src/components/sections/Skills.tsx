import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import ReactFlow, {
  Node,
  Edge,
  Background,
  BackgroundVariant,
  MarkerType,
  Handle,
  Position,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';

// Custom node component
const SkillNode = ({ data }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getSkillStyle = (level: number, unlocked: boolean) => {
    if (!unlocked) return { 
      description: "Locked", 
      color: "bg-muted", 
      textColor: "text-muted-foreground"
    };
    
    if (level >= 90) return { 
      description: "Legendary", 
      color: "bg-gradient-to-br from-purple-600 to-pink-600", 
      textColor: "text-purple-300"
    };
    if (level >= 80) return { 
      description: "Master", 
      color: "bg-gradient-to-br from-blue-600 to-cyan-600", 
      textColor: "text-blue-300"
    };
    if (level >= 70) return { 
      description: "Expert", 
      color: "bg-gradient-to-br from-green-600 to-emerald-600", 
      textColor: "text-green-300"
    };
    if (level >= 60) return { 
      description: "Proficient", 
      color: "bg-gradient-to-br from-yellow-600 to-amber-600", 
      textColor: "text-yellow-300"
    };
    return { 
      description: "Learning", 
      color: "bg-gradient-to-br from-gray-600 to-slate-600", 
      textColor: "text-gray-400"
    };
  };

  const style = getSkillStyle(data.level, data.unlocked);

  return (
    <div className="relative">
      {/* Connection handles */}
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
      
      <div 
        className="relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`
            w-20 h-20 rounded-full border-2 border-border
            flex items-center justify-center text-white font-bold
            ${style.color} shadow-lg
            ${isHovered ? 'shadow-xl border-primary scale-110' : ''}
            ${!data.unlocked ? 'grayscale opacity-60' : ''}
            transition-all duration-300 cursor-pointer
          `}
        >
          <span className="text-lg">{data.level}</span>
        </div>
        
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center w-max pointer-events-none">
          <div className={`text-sm font-medium ${style.textColor} whitespace-nowrap`}>
            {data.label}
          </div>
          <div className="text-xs text-muted-foreground">
            {style.description}
          </div>
        </div>
        
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-[200] bg-popover/98 backdrop-blur-md rounded-lg p-4 border-2 border-primary/30 shadow-2xl min-w-64"
          >
            <div className="space-y-3">
              <div className="text-popover-foreground font-bold text-base">{data.label}</div>
              <div className="flex items-center gap-2">
                <div className="text-muted-foreground text-sm">Level {data.level}/100</div>
                <div className={`text-xs px-2 py-0.5 rounded ${style.color} text-white font-semibold`}>
                  {style.description}
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${style.color} transition-all duration-500`}
                  style={{ width: `${data.level}%` }}
                />
              </div>
              <div className="pt-2 border-t border-border">
                <div className="text-xs text-muted-foreground mb-2">Technologies:</div>
                <div className="flex flex-wrap gap-1.5">
                  {data.skills.map((tech: string) => (
                    <Badge 
                      key={tech}
                      variant="secondary" 
                      className="text-xs px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const nodeTypes = {
  skillNode: SkillNode,
};

// Define nodes
const initialNodes: Node[] = [
  // Top tier
  {
    id: '1',
    type: 'skillNode',
    position: { x: 400, y: 50 },
    data: { 
      label: 'Programming Foundations', 
      level: 85, 
      unlocked: true,
      skills: ["C++", "Java", "Python", "JavaScript"]
    },
  },
  
  // Second tier
  {
    id: '2',
    type: 'skillNode',
    position: { x: 100, y: 200 },
    data: { 
      label: 'Frontend', 
      level: 70, 
      unlocked: true,
      skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"]
    },
  },
  {
    id: '3',
    type: 'skillNode',
    position: { x: 300, y: 200 },
    data: { 
      label: 'Backend', 
      level: 65, 
      unlocked: true,
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase"]
    },
  },
  {
    id: '4',
    type: 'skillNode',
    position: { x: 500, y: 200 },
    data: { 
      label: 'AI/ML', 
      level: 70, 
      unlocked: true,
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Data Science"]
    },
  },
  {
    id: '5',
    type: 'skillNode',
    position: { x: 700, y: 200 },
    data: { 
      label: 'Game Development', 
      level: 90, 
      unlocked: true,
      skills: ["Unity", "Unreal Engine", "C#", "Game Design"]
    },
  },
  
  // Third tier
  {
    id: '6',
    type: 'skillNode',
    position: { x: 50, y: 380 },
    data: { 
      label: 'Advanced Frontend', 
      level: 60, 
      unlocked: true,
      skills: ["Three.js", "WebGL", "PWA", "Performance"]
    },
  },
  {
    id: '7',
    type: 'skillNode',
    position: { x: 180, y: 380 },
    data: { 
      label: 'Web3', 
      level: 65, 
      unlocked: true,
      skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"]
    },
  },
  {
    id: '8',
    type: 'skillNode',
    position: { x: 310, y: 380 },
    data: { 
      label: 'App Development', 
      level: 75, 
      unlocked: true,
      skills: ["Flutter", "Swift", "React Native", "Mobile UI"]
    },
  },
  {
    id: '9',
    type: 'skillNode',
    position: { x: 440, y: 380 },
    data: { 
      label: 'Cloud Computing', 
      level: 55, 
      unlocked: false,
      skills: ["AWS", "Docker", "Kubernetes", "DevOps"]
    },
  },
  {
    id: '10',
    type: 'skillNode',
    position: { x: 570, y: 380 },
    data: { 
      label: 'Deep Learning', 
      level: 75, 
      unlocked: true,
      skills: ["Neural Networks", "TensorFlow", "OpenCV", "Computer Vision"]
    },
  },
  
  // Bottom tier
  {
    id: '11',
    type: 'skillNode',
    position: { x: 400, y: 550 },
    data: { 
      label: 'Full Stack Mastery', 
      level: 40, 
      unlocked: false,
      skills: ["System Design", "Architecture", "Leadership", "Innovation"]
    },
  },
];

// Define edges (connections)
const initialEdges: Edge[] = [
  // From Programming Foundations
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    type: 'smoothstep', 
    animated: true, 
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' }
  },
  { 
    id: 'e1-3', 
    source: '1', 
    target: '3', 
    type: 'smoothstep', 
    animated: true, 
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' }
  },
  { 
    id: 'e1-4', 
    source: '1', 
    target: '4', 
    type: 'smoothstep', 
    animated: true, 
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' }
  },
  { 
    id: 'e1-5', 
    source: '1', 
    target: '5', 
    type: 'smoothstep', 
    animated: true, 
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' }
  },
  
  // From Frontend
  { 
    id: 'e2-6', 
    source: '2', 
    target: '6', 
    type: 'smoothstep', 
    animated: true, 
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' }
  },
  { 
    id: 'e2-7', 
    source: '2', 
    target: '7', 
    type: 'smoothstep', 
    animated: true, 
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' }
  },
  { 
    id: 'e2-8', 
    source: '2', 
    target: '8', 
    type: 'smoothstep', 
    animated: true, 
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' }
  },
  
  // From Backend
  { 
    id: 'e3-9', 
    source: '3', 
    target: '9', 
    type: 'smoothstep', 
    animated: false, 
    style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 2, strokeDasharray: '5,5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--muted-foreground))' }
  },
  
  // From AI/ML
  { 
    id: 'e4-10', 
    source: '4', 
    target: '10', 
    type: 'smoothstep', 
    animated: true, 
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' }
  },
];

export default function Skills() {
  const [nodes] = useState<Node[]>(initialNodes);
  const [edges] = useState<Edge[]>(initialEdges);

  const getSkillStyle = (level: number, unlocked: boolean) => {
    if (!unlocked) return { 
      description: "Locked", 
      color: "bg-muted", 
      textColor: "text-muted-foreground"
    };
    
    if (level >= 90) return { 
      description: "Legendary", 
      color: "bg-gradient-to-br from-purple-600 to-pink-600", 
      textColor: "text-purple-300"
    };
    if (level >= 80) return { 
      description: "Master", 
      color: "bg-gradient-to-br from-blue-600 to-cyan-600", 
      textColor: "text-blue-300"
    };
    if (level >= 70) return { 
      description: "Expert", 
      color: "bg-gradient-to-br from-green-600 to-emerald-600", 
      textColor: "text-green-300"
    };
    if (level >= 60) return { 
      description: "Proficient", 
      color: "bg-gradient-to-br from-yellow-600 to-amber-600", 
      textColor: "text-yellow-300"
    };
    return { 
      description: "Learning", 
      color: "bg-gradient-to-br from-gray-600 to-slate-600", 
      textColor: "text-gray-400"
    };
  };

  return (
    <section id="skills" className="py-20 bg-accent justify-center items-center flex">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Tech Skill Tree
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Journey through the realms of technology and unlock new abilities
            </motion.p>
          </div>
          
          {/* Skill Tree Canvas */}
          <div className="relative w-full h-[700px] bg-background/50 rounded-lg border border-border backdrop-blur-sm overflow-hidden">
            <ReactFlowProvider>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.2 }}
                nodesDraggable={false}
                nodesConnectable={false}
                nodesFocusable={true}
                edgesFocusable={false}
                elementsSelectable={false}
                zoomOnScroll={false}
                panOnScroll={false}
                panOnDrag={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                preventScrolling={false}
                proOptions={{ hideAttribution: true }}
                defaultEdgeOptions={{
                  animated: true,
                  style: { strokeWidth: 2 },
                }}
              >
                <Background 
                  color="hsl(var(--muted-foreground))" 
                  variant={BackgroundVariant.Dots}
                  gap={20} 
                  size={1} 
                />
              </ReactFlow>
            </ReactFlowProvider>
          </div>
          
          {/* Legend */}
          <motion.div 
            className="flex justify-center flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { level: 90, label: "Legendary" },
              { level: 80, label: "Master" },
              { level: 70, label: "Expert" },
              { level: 60, label: "Proficient" },
              { level: 0, label: "Learning", unlocked: false }
            ].map(({ level, label, unlocked = true }) => {
              const style = getSkillStyle(level, unlocked);
              return (
                <div key={label} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${style.color} ${!unlocked ? 'grayscale opacity-60' : ''}`} />
                  <span className="text-muted-foreground text-sm">{label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}