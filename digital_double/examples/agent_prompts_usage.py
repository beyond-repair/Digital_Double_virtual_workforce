from digital_double import Orchestrator, AgentType

def main():
    # Initialize the orchestrator
    orchestrator = Orchestrator()

    # Create agents of different types
    agents = {
        "IT": orchestrator.create_agent(AgentType.IT),
        "Marketing": orchestrator.create_agent(AgentType.MARKETING),
        "Content": orchestrator.create_agent(AgentType.CONTENT),
        "Design": orchestrator.create_agent(AgentType.DESIGN),
    }

    # Print agent information
    for name, agent in agents.items():
        print(f"\n{name} Agent:")
        print(f"Model: {agent.get_model_name()}")
        print("System Prompt Preview:")
        print(f"{agent.get_system_prompt()[:200]}...")

if __name__ == "__main__":
    main()