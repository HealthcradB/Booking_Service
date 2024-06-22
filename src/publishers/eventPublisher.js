class EventPublisher {
  publish(event, data) {
    // Here you can integrate with an actual message broker like Kafka, RabbitMQ, etc.
    console.log(`Event Published: ${event}`, data);
  }
}

const eventPublisher = new EventPublisher();
export default eventPublisher;
