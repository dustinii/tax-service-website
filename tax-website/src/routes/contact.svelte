<script>
    import Input from 'daisyui/dist/components/input/index.js';
    import TextArea from 'daisyui/dist/components/textarea/index.js';
    import Button from 'daisyui/dist/components/button/index.js';
</script>

<main>
    <section class="container mx-auto p-6">
        <h2 class="text-3xl font-bold mb-4">Get In Touch</h2>
        <form>
            <div class="form-control">
                <Input type="text" placeholder="Your Name" class="input-bordered"/>
            </div>
            <div class="form-control">
                <Input type="email" placeholder="Your Email" class="input-bordered"/>
            </div>
            <div class="form-control">
                <TextArea placeholder="Your Message" class="textarea-bordered"/>
            </div>
            <div class="form-control mt-6">
                <Button class="btn-primary">Send Message</Button>
            </div>
        </form>
    </section>
</main>
