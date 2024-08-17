import { Box, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../Components/PageHeader";

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                title="About Page"
                subtitle="On this page you can find explanations about using the application"
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ width: "400px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste cum sed temporibus ducimus unde autem perspiciatis, quam animi illo vitae molestiae dolor maiores. Nesciunt nulla nam quaerat consequatur fugiat error, cumque modi esse ad dolor, vitae vero perferendis alias quidem pariatur amet quibusdam. Tenetur harum nobis similique veniam illo quo vero repellendus praesentium excepturi tempora pariatur sed quam perferendis beatae, natus cum quae laboriosam expedita nostrum. Totam ab perspiciatis dolore enim quo recusandae quos autem velit nostrum quae non eaque blanditiis, a quis harum aliquam laborum. Rerum quo distinctio qui! Corrupti possimus, dolor esse molestiae incidunt illo vitae quisquam beatae. Iusto ipsam iure repudiandae provident aperiam, voluptatem quam voluptatum et accusantium doloribus repellendus dolore, sunt incidunt laborum veritatis magni, aut porro veniam sed? Officia asperiores iusto est, voluptatem aliquid reprehenderit autem esse atque possimus pariatur? Illo expedita nisi vero, quia explicabo dolore ab fugit velit libero. Exercitationem nisi magnam, nam necessitatibus, soluta officia, sit voluptates incidunt inventore quasi labore nostrum impedit fugit ab laborum iusto voluptate facere quas nesciunt fugiat quaerat adipisci! Dolore, aperiam reprehenderit, obcaecati, esse doloribus maiores quos ea sed velit accusamus animi ratione consectetur dolor provident doloremque voluptatibus eius autem illum. Deserunt, assumenda nemo. Ipsam, repellat eveniet?</Typography>
                <Box>
                    <img src="/card.png" alt="card" style={{ width: '100%', height: 'auto' }} />
                </Box>
            </div>
        </div>
    );
}