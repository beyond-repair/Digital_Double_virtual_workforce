from digital_double import Orchestrator, AgentType

def main():
    # Initialize the orchestrator
    orchestrator = Orchestrator()

    # Create agents
    it_agent = orchestrator.create_agent(AgentType.IT)
    marketing_agent = orchestrator.create_agent(AgentType.MARKETING)

    # Create tasks
    task1 = orchestrator.create_task(
        type=AgentType.IT,
        description="Setup new development environment",
        priority="high"
    )
    
    task2 = orchestrator.create_task(
        type=AgentType.MARKETING,
        description="Create social media campaign",
        priority="medium"
    )

    # Assign tasks
    orchestrator.assign_task(task1.id)
    orchestrator.assign_task(task2.id)

    # Complete tasks
    it_agent.complete_task(success=True)
    marketing_agent.complete_task(success=True)

    # Print agent performance
    print(f"IT Agent performance: {it_agent.performance}")
    print(f"Marketing Agent performance: {marketing_agent.performance}")

if __name__ == "__main__":
    main()