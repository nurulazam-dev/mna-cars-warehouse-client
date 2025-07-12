const Teams = () => {
  const teamMembers = [
    {
      name: "Nurul Azam",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "22+ years in the automotive industry. Passionate about quality cars and customer service.",
      social: {
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      name: "Sarah Johnson",
      role: "Sales Manager",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Expert in matching customers with their perfect car. Loves classic imports.",
      social: {
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      name: "Michael Lee",
      role: "Lead Mechanic",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      bio: "Certified mechanic ensuring every car is fully inspected and certified.",
      social: {
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      name: "Emily Carter",
      role: "Customer Support",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Always ready to help with queries, test drives, and after-sales support.",
      social: {
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
      },
    },
  ];

  return (
    <section className="py-5" style={{ background: "#f5f7fa" }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3 animate__animated animate__fadeInDown">
              <i className="bi bi-people-fill text-primary me-2"></i>
              Meet Our Team
            </h2>
            <p className="text-secondary fs-5 animate__animated animate__fadeIn animate__delay-1s">
              Our dedicated team brings decades of experience and a passion for
              cars to ensure you get the best service and vehicles.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          {teamMembers?.map((member, idx) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4 d-flex" key={idx}>
              <div
                className="card shadow-sm rounded-4 w-100 text-center animate__animated animate__fadeInUp border-0"
                style={{
                  animationDelay: `${idx * 0.2 + 0.2}s`,
                  background: "#fff",
                }}
              >
                <div className="pt-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-circle shadow"
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      border: "4px solid #e9f5ff",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="fw-bold mb-1">{member?.name}</h5>
                  <div className="text-primary mb-2">{member?.role}</div>
                  <p className="text-secondary small">{member?.bio}</p>
                  <div className="d-flex justify-content-center gap-2 mt-2">
                    <a
                      href={member?.social?.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-facebook fs-5 text-primary"></i>
                    </a>
                    <a
                      href={member?.social?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin fs-5 text-info"></i>
                    </a>
                    <a
                      href={member?.social?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter fs-5 text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
