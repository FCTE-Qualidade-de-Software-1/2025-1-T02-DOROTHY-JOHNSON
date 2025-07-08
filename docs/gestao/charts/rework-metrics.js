const owner = "FCTE-Qualidade-de-Software-1";
const repo = "2025-1-T02-DOROTHY-JOHNSON";

async function fetchCommits() {
  const commits = [];
  let page = 1;
  let hasMore = true;

  while (hasMore && page <= 10) {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100&page=${page}`
    );

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) break;

    commits.push(...data);
    page++;
  }

  return commits
    .map((commit) => commit.commit.message)
    .filter((msg) => !msg.startsWith("Merge"));
}

function countTypes(messages) {
  let retrabalho = 0;
  let outros = 0;

  messages.forEach((msg) => {
    if (msg.startsWith("fix:") || msg.startsWith("refactor:")) retrabalho++;
    else outros++;
  });

  return { retrabalho, outros };
}

fetchCommits().then((messages) => {
  const filtered = messages;
  const { retrabalho, outros } = countTypes(filtered);

  const ctx = document.getElementById("commitChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Retrabalho", "Outros"],
      datasets: [
        {
          label: "% de Commits",
          data: [
            ((retrabalho / filtered.length) * 100).toFixed(1),
            ((outros / filtered.length) * 100).toFixed(1),
          ],
          backgroundColor: ["#60a5fa", "#34d399"],
          borderRadius: 8,
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Distribuição de Commits: Retrabalho vs Outros",
          font: {
            size: 18,
          },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (val) => `${val}%`,
          },
        },
      },
    },
  });
});
