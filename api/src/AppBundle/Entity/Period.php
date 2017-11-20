<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Period
 *
 * @ORM\Table(name="period")
 * @ORM\Entity
 */
class Period
{
    /**
     * @var string
     *
     * @ORM\Column(name="period_name", type="string", length=20, nullable=true)
     */
    private $periodName;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="period_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;


}

