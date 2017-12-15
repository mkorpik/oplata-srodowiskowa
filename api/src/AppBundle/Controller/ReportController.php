<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class ReportController extends Controller
{
    /**
     * @Route("/generate")
     */
    public function GenerateAction()
    {
        return $this->render('AppBundle:Report:generate.html.twig', array(
            // test
        ));
    }

    /**
     * @Route("/company/{id}")
     */
    public function Generate2Action($id)
    {
        $company = $this->getDoctrine()->getRepository(Company::class)->find($id);
        return $this->render('AppBundle:Report:generate2.html.twig', array(
            'company' => $company
        ));
    }

}
